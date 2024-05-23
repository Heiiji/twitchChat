import { shallowMount } from "@vue/test-utils";
import ChatView from "@/components/ChatView/ChatView.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Chat Twitch";
    const wrapper = shallowMount(ChatView, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
