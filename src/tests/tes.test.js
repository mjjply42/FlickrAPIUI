import React from 'react';
import { render } from '@testing-library/react';
import { tester } from '../utils/test.js';
const request = require('supertest')

test('prints out hello', () => {
    expect(tester()).toEqual("HELLO");
});