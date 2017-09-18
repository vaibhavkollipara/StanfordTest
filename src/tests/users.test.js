import React from 'react';
import {shallow } from 'enzyme';
import { expect } from 'chai';
import Users from '.././components/users';

describe('Users Tests :',()=>{
    const wrapper = shallow(<Users />);

    it('should have class users_container',()=>{
        expect(wrapper.hasClass('users_container')).to.equal(true);
    })

    it('should have 1 child',()=>{
        expect(wrapper.children()).to.have.length(1);
    })

    it('should have userstable as first child',()=>{
        expect(wrapper.childAt(0).hasClass('users_table')).to.equal(true);
    })

    it('userstable should have 4 children',()=>{
        expect(wrapper.childAt(0).children()).to.have.length(4);
    });

    it('users_table should have 3 user rows',()=>{
        expect(wrapper.find('tr.user_row')).to.have.length(3);
    })

});
