import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import ResultView from '../ResultView.vue'
import { useFormStore } from "../../stores/form";

const wrapper = mount(ResultView, {
    global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, })],
    },
})


const store = useFormStore()

describe('Renders Result View', () => {
    const renderedData = wrapper.findAll('p')
    it('Renders Page header', () => {
        expect(wrapper.text()).toContain('Your Form Input')
    })
    it('Renders p tag for each item', () => {
        const storeItemsNamesLength = store.form.length
        const renderedDataLenght = renderedData.length
        expect(storeItemsNamesLength).toEqual(renderedDataLenght)
    })
    it('Renders Store Items', () => {
        for (let i = 0; i < store.form.length; i++) {
        expect(renderedData[i].text()).toContain(store.form[i].name)
        }
    })
})
