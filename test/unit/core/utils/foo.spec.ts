import { describe, expect, test } from 'bun:test';

import { foo } from '#/core/utils/foo';

describe('foo', () => {
    test('should return "foo"', () => {
        expect(foo()).toBe('foo');
    });
});