import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
import { useFormStore } from "../../stores/form";
import { DataTransfer, File, } from "happy-dom"

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
    it('Update the store', async () => {
        for (let i = 0; i < store.form.length; i++) {
            if (store.form[i].type === 'file') {
                // Upload a file
                const dT = new DataTransfer()
                dT.items.add(new File(['foo'], 'programmatically_created.txt'))
                await inputFields[i].trigger('change')
            }
            else {
                // Update input value
                inputFields[i].setValue("C:\\fakepath\\")
                inputFields[i].trigger('input')
                expect(store.form[i].value).toBe("C:\\fakepath\\")
            }
        }
    })
})

