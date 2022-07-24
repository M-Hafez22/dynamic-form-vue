import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import { useFormStore } from "../../stores/form";

const wrapper = mount(HomeView, {
    global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, })],
    },
})


const store = useFormStore()

describe('Renders Home View', () => {
    const inputFields = wrapper.findAll('input')
    const inputLabel = wrapper.findAll('label')
    it('Renders form header', () => {
        expect(wrapper.text()).toContain('Form')
    })
    it('Renders Input label for each form item', () => {
        for (let i = 0; i < inputFields.length; i++){
            expect(inputLabel[i].text()).toContain(`${store.form[i].name}`)
        }
    })
    it('Renders input field for each form item', () => {
        expect(store.form.length).toEqual(inputFields.length)
    })
})

