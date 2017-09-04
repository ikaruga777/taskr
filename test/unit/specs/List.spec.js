import List from '@/components/List.vue'
import {mount} from 'avoriaz'

describe('List.vueの振る舞いだちょ', () => {
  it('コンストラクタはタイトルとidを設定できるチョ', () => {
    const date = Date.now()
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: date,
          title: 'listtest1',
          tasks: []
        }
      }
    })

    expect(wrapper.find('h3')[0].text()).to.be.eql('listtest1')
    expect(wrapper.vm.$props.list.id).to.be.eql(date)
  })
  it('', () => {
    const date = Date.now()
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: date,
          title: 'listtest1',
          tasks: []
        }
      }
    })

    expect(wrapper.find('h3')[0].text()).to.be.eql('listtest1')
    expect(wrapper.vm.$props.list.id).to.be.eql(date)
  })
})
