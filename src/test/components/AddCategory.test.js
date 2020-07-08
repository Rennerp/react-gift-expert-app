import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas del componente', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories = { setCategories }/>)

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories = { setCategories }/>)
  })

  test('Reenderizacion del componente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Evaluar los cambios en el input', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', {target: { value }});
  })

  test('No debe de hacer el submit si la caja esta vacia', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  })

  test('Debe de llamar el metodo setCategories y limpiar la caja de texto', () => {
    // 1. Simular el input change
    const value = 'Hola mundo';
    const input = wrapper.find('input');
    input.simulate('change', {target: { value }});
    // 2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    // 3. Se debe de haber llamado
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function)); //Validar que sea llamado con una funcion
    // 4. value debe de estar vacio ''
    expect(input.prop('value')).toBe('');

  })

})
