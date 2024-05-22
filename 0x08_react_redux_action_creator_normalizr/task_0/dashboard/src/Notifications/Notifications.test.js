import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the Notifications component
    beforeEach(() => {
        wrapper = shallow(<Notifications />);
        StyleSheetTestUtils.suppressStyleInjection();
    });

    test('Notifications renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Notifications renders the text "Here is the list of notifications"', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New Course Available' }
        ];

        wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });

    // Notification Item Tests ---------------------------------------------------------------------
    test('Notifications renders NotificationItem components', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New Course Available'},
            { id: 2, type: 'urgent', value: 'New Resume Available'},
            { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
        ]
        wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems.length).toBe(3);
    });

    test('Verifying the first NotificationItem renders the correct html', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New Course Available' },
            { id: 2, type: 'urgent', value: 'New Resume Available' },
            { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
        ];

        wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        const firstNotificationItem = wrapper.find(NotificationItem).first();
        expect(firstNotificationItem.shallow().html()).toContain('New Course Available');
    });

    // Notification rendering tests with displayDrawer -----------------------------------
    test('Menu is being displayed when displayDrawer is false', () => {
        wrapper = shallow(<Notifications displayDrawer={false} />);
        const menuItem = wrapper.findWhere(node => 
            node.prop('className') && node.prop('className').startsWith('menuItem')
        );
        expect(menuItem.exists()).toBe(true);
    });

    test('div.Notifications is not being displayed when displayDrawer is false', () => {
        wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    // test('Menu is being displayed when displayDrawer is true', () => {
    //     wrapper = shallow(<Notifications displayDrawer={true} />);
    //     const menuItem = wrapper.findWhere(node => 
    //         node.prop('className') && node.prop('className').startsWith('menuItem')
    //     );
    //     expect(menuItem.exists()).toBe(true);
    // });

    test('div.Notifications is being displayed when displayDrawer is true', () => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
        const notificationDiv = wrapper.findWhere(node => 
            node.prop('className') && node.prop('className').startsWith('Notifications')
        );
        expect(notificationDiv.exists()).toBe(true);
    });

    // Notification rendering with listNotifications --------------------------
    test('Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
        wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.find(NotificationItem).length).toBe(0);
        expect(wrapper.text().includes('No new notification for now')).toBe(true);

        // Test without listNotifications prop
        wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).length).toBe(0);
        expect(wrapper.text().includes('No new notification for now')).toBe(true);
    });

    test(' when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New Course Available' },
            { id: 2, type: 'urgent', value: 'New Resume Available' },
            { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
        ];

        wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    test('when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
        wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(false);
        expect(wrapper.text().includes('No new notification for now')).toBe(true);
    });

    test('when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
        const listNotifications = [
            { id: 1, type: 'default', value: 'New Course Available' },
            { id: 2, type: 'urgent', value: 'New Resume Available' },
            { id: 3, type: 'urgent', html: { __html: 'Urgent requirement - complete by EOD' } },
        ];
    
        wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    
        const instance = wrapper.instance();
        instance.markAsRead(1);
    
        expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    
        consoleLogSpy.mockRestore();
    });

    test('when updating the props of the component with the same list, the component doesn’t rerender', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
        ];

        wrapper.setProps({ listNotifications: initialList });

        const renderSpy = jest.spyOn(Notifications.prototype, 'render');

        wrapper.setProps({ listNotifications: initialList });

        expect(renderSpy).toHaveBeenCalledTimes(0);

        renderSpy.mockRestore();
    });

    test('when updating the props of the component with a longer list, the component does rerender', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
        ];

        const secondaryList = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
            { id: 3, type: 'urgent', value: 'Notification 3' },
            { id: 4, type: 'default', value: 'Notification 4' },
        ];

        wrapper.setProps({ listNotifications: initialList });

        const renderSpy = jest.spyOn(Notifications.prototype, 'render');

        wrapper.setProps({ listNotifications: secondaryList });

        expect(renderSpy).toHaveBeenCalledTimes(1);

        renderSpy.mockRestore();
    });

    test('verify that clicking on the menu item calls handleDisplayDrawer', () => {
        const handleDisplayDrawerMock = jest.fn();
        const wrapper = shallow(<Notifications listNotifications={[]} handleDisplayDrawer={handleDisplayDrawerMock} handleHideDrawer={() => {}} displayDrawer={false} />);
        
        const menuItem = wrapper.findWhere(node =>
            node.prop('className') && node.prop('className').startsWith('menuItem')
        );
        menuItem.simulate('click');
    
        expect(handleDisplayDrawerMock).toHaveBeenCalled();
    });

    test('verify that clicking on the button calls handleHideDrawer', () => {
        const handleHideDrawerMock = jest.fn();
        const wrapper = shallow(<Notifications listNotifications={[]} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawerMock} displayDrawer={true} />);
        
        const closeButton = wrapper.find('.close-button');
        closeButton.simulate('click');
    
        expect(handleHideDrawerMock).toHaveBeenCalled();
    });
});