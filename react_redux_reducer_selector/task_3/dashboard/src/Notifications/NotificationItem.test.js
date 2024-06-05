import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component tests', () => {
    test('NotificationItem renders without crashing', () => {
        const id = 100;
        const type = 'default';
        const value = 'test';
        const wrapper = shallow(<NotificationItem id={id} type={type} value={value} />);
        expect(wrapper.exists()).toBe(true);
    });

    test('NotificationItem renders the correct html with data props', () => {
        const id = 100;
        const type = 'default';
        const value = 'test';
        const wrapper = shallow(<NotificationItem id={id} type={type} value={value} />);

        const liItem = wrapper.find('li');

        expect(liItem.exists()).toBe(true);
        expect(liItem.prop('data-priority')).toBe(type);
        expect(liItem.text()).toBe(value);
    });

    test('Renders the correct html with a dummy html prop', () => {
        const id = 100;
        const type = 'default';
        const value = 'test';
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem id={id} type={type} value={value} html={html} />);

        const liItem = wrapper.find('li');
        expect(liItem.exists()).toBe(true);

        expect(liItem.prop('dangerouslySetInnerHTML').__html).toBe("<u>test</u>");
    });

    test('pass a spy as the markAsRead property, when simulating a click on the component, the spy is called with the right ID argument', () => {
        const spy = jest.fn();

        const id = 100;
        const type = 'default';
        const value = 'test';

        const wrapper = shallow(
            <NotificationItem
                id={id}
                type={type}
                value={value}
                markAsRead={spy}
            />
        );

        wrapper.find('li').simulate('click');

        expect(spy).toHaveBeenCalledWith(id);
    });
});