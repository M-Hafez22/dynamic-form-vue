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
    it('Renders Page header', () => {
        expect(wrapper.text()).toContain('Your Form Input')
    })
})
