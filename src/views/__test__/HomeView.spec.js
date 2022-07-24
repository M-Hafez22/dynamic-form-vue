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
    it('Renders form header', () => {
        expect(wrapper.text()).toContain('Form')
    })
})

