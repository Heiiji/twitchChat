import { shallowMount } from "@vue/test-utils";
import ChatView from "@/components/Message/MessageView.vue";

describe("Message.vue", () => {
  it("renders props when passed", () => {
    const msg = "Jhonn Doe: test";
    const wrapper = shallowMount(ChatView, {
      props: { message: "test", username: "Jhonn Doe" },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
