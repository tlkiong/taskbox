import ZendeskWebWidget from './ZendeskWebWidget';

export default {
  title: 'Zendesk Web Widget',
  component: ZendeskWebWidget,
  excludeStories: /.*Data$/
};

const Template = (args, { argTypes }) => ({
  components: { ZendeskWebWidget },
  props: Object.keys(argTypes),
  template: `<ZendeskWebWidget v-bind="$props" />`
})

export const Default = Template.bind({});
Default.args = {
  widgetKey: '',
  colors: {
    background: '#0f0f0f',
    text: '#FFF'
  }
}