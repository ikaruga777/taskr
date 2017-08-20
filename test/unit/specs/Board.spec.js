import Board from '@/components/Board.vue'
import { mount } from 'avoriaz'

describe('Board.vue', () => {
  it('data', () => {
    const wrapper = mount(Board, {
      propsData: {
      }
    })
    expect(wrapper.data().name).to.be.eql('board1')
  })
})
