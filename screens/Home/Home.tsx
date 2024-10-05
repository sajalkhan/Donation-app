import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, Image, Pressable, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import HeaderSection from '../../components/HeaderSection/HeaderSection';
import SearchSection from '../../components/SearchSection/SearchSection';
import DonationItem from '../../components/DonationItem/DonationItem';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';

import { RootState } from '../../redux/store';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import { TDonationItem, updateSelectedDonationId } from '../../redux/reducers/Donations';
import { resetToInitialState } from '../../redux/reducers/User';
import { logOut } from '../../api/user';

import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';
import style from './style';

interface HomeProps {
  navigation: NavigationProp<any>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { displayName, profileImage } = useSelector((state: RootState) => state.user);
  const { categories, selectedCategoryId } = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);

  const [donationItems, setDonationItems] = useState<TDonationItem[]>([]);

  useEffect(() => {
    const filteredItems = donations.items.filter(item => item.categoryIds.includes(selectedCategoryId));
    setDonationItems(filteredItems);
  }, [selectedCategoryId, donations.items]);

  const categoryInfo = categories.find(cat => cat.categoryId === selectedCategoryId);

  const handleDonationItemPress = (selectedDonationId: number) => {
    dispatch(updateSelectedDonationId(selectedDonationId));
    navigation.navigate(Routes.SingleDonationItem, { categoryInfo });
  };

  const handleLogout = () => {
    dispatch(resetToInitialState());
    logOut();
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection title={displayName + ' 👋'} profileImage={profileImage} logOut={handleLogout} />
        <SearchSection />

        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>

        <CategoriesSection
          categories={categories}
          selectedCategory={selectedCategoryId}
          onCategorySelect={categoryId => dispatch(updateSelectedCategoryId(categoryId))}
        />

        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(item => (
              <View key={item.donationItemId} style={style.singleDonationItem}>
                <DonationItem
                  onPress={handleDonationItemPress}
                  donationItemId={item.donationItemId}
                  uri={item.image}
                  donationTitle={item.name}
                  badgeTitle={categoryInfo?.name || ''}
                  price={parseFloat(item.price)}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
