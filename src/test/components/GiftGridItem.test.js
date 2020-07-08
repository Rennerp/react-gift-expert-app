import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Debe reenderizar el componente GiftGridItem', () => {

  const title = 'Un Titulo';
  const url = 'https://localhost/algo.jpg'
  let wrapper = shallow(<GifGridItem title = { title } url = {url} />);

  test('Reenderiza el componente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Verificacion del titulo', () => {
    const titulo = wrapper.find('p').text().trim();
    expect(titulo).toBe(title);
  })

  test('Verificando la imagen', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  })

  test('Verificando la clase del div', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  })

})
