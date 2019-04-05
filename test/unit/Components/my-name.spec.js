import { shallowMount, createLocalVue } from '@vue/test-utils'
import MyName from '../../../src/components/my-name.vue';

let sut, localVue, wrapper;

beforeEach(() => {
    localVue = createLocalVue();
    wrapper = shallowMount(MyName, {
        localVue
    });
    sut = wrapper.vm;
});

describe('MyName test', () => {
    it('Displays my name when I write it', () => {

        expect(wrapper.vm.name).toBe('My name');

        const input = wrapper.find('input');
        input.element.value = 'Stefan';
        input.trigger('input');

        expect(wrapper.vm.name).toBe('Stefan');
    })
});

describe('calculate', () => {
    it('should return 1 with true and true', () => {

        var paramA = true;
        var paramB = true;
        var result = sut.calculate(paramA, paramB);
        var expectedResult = 1;
        expect(result).toBe(expectedResult);
    });
    it('should return 0 with false and false', () => {

        var paramA = false;
        var paramB = false;
        var result = sut.calculate(paramA, paramB);
        var expectedResult = 0;
        expect(result).toBe(expectedResult);
    });
    xit('should return 0 with false and true', () => {

        var paramA = false;
        var paramB = true;
        var result = sut.calculate(paramA, paramB);
        var expectedResult = 0;
        expect(result).toBe(expectedResult);
    });
});

describe('divide', () => {
    it('should return 1 with 1 and 1', () => {

        var paramA = 1;
        var paramB = 1;
        var result = sut.divide(paramA, paramB);
        var expectedResult = 1;
        expect(result).toBe(expectedResult);
    });
    xit('should return 1.5 with 3 and 2', () => {

        var paramA = 3;
        var paramB = 2;
        var result = sut.divide(paramA, paramB);
        var expectedResult = 1.5;
        expect(result).toBe(expectedResult);
    });
});