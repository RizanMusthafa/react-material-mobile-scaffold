import React from 'react';
import PropTypes from 'prop-types';
import { View } from '../../atoms';
import { BottomNavigation, PageHeader } from '../../organisms';

function MainPageTemplate(props) {
  const { pageTitle } = props;
  return (
    <View className="page-container">
      <PageHeader title={pageTitle} />
      <View className="box"></View>
      <BottomNavigation />
    </View>
  );
}

MainPageTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default MainPageTemplate;
