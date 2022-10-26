import { load } from "../components/loading/loading";

export default {
  created(el, binding: any) {
    if (binding.value) {
      load.show();
    }
  },
};
