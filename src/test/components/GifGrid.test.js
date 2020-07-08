import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Realizando pruebas del componente GifGrid', () => {
  const category = 'Samurai x'

  test('Debe de reenderizar el componente', () => {
    // Se realiza una falsa llamada con el estado inicial del hook
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category = { category } />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de mostrar items cuando se carga una imagen desde el hook', () => {
    //Se utilizan mocks: son fakers de informacion

    const imgs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    },{
      id: '123',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category = { category } />);
    // Verificamos que la etiqueta p no exista
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(imgs.length);

  })

})

