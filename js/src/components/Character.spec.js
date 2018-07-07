import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Character from '../../components/Character'
​
Enzyme.configure({ adapter: new Adapter() });
​
function setup() {
  const props = {
    addTodo: jest.fn()
	charProfile : 
	charName : 
  }
​
  const enzymeWrapper = mount(<Character {...props} />)
​
  return {
    props,
    enzymeWrapper
  }
}
​

describe('Character', () => {
  it('should render character name of each character in list', () => {
    const { enzymeWrapper } = setup()
​
    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)
​
    expect(enzymeWrapper.find('h1').text()).toBe('todos')
​
    const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
    expect(todoInputProps.newTodo).toBe(true)
    expect(todoInputProps.placeholder).toEqual('What needs to be done?')
  })
​
  it('should open character details in modal onclick', () => {
    const { enzymeWrapper, props } = setup()
    const input = enzymeWrapper.find('TodoTextInput')
    input.props().onSave('')
    expect(props.addTodo.mock.calls.length).toBe(0)
    input.props().onSave('Use Redux')
    expect(props.addTodo.mock.calls.length).toBe(1)
  })
})
