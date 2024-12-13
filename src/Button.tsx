import './button.css';
import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';

const buttonProps = () => {
  return {
    primary: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium'
    },
    label: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => {}
    }
  };
};

type ButtonPropsType = Partial<
  ExtractPropTypes<ReturnType<typeof buttonProps>>
>;

export const Button = defineComponent({
  name: 'Button',
  props: buttonProps(),
  setup(props: ButtonPropsType, { slots }) {
    return () => {
      const {
        primary = false,
        size = 'medium',
        backgroundColor,
        label
      } = props;
      const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
      return (
        <button
          type="button"
          class={['demo-button', `demo-button--${size}`, mode]}
          style={{ backgroundColor }}
          onClick={props.onClick}
        >
          {slots.default ? slots.default() : label}
        </button>
      );
    };
  }
});
