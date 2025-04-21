// import MessageComponent from '@/components/MessageComponent.vue'
import { shallowMount } from '@vue/test-utils'

const MessageComponent = {
  template: '<div>{{ msg }}</div>',
  props: ['msg']
}

describe('MessageComponent', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MessageComponent, {
      propsData: {msg}
    })
    expect(wrapper.text()).toMatch(msg)
  })
});