import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import { GiftExperApp } from '../GiftExpertApp';

describe('GifExpertApp Test', () => {

  let wrapper = shallow(<GiftExperApp />);

  test('Reenderizando el componente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar la lista de categorias', () => {
    const categories = ['One punch', 'Dragon ball']
    const wrapper = shallow(<GiftExperApp defaultCategories = {categories}/>);

    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe(categories.length);
  })

})

