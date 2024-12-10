export const useNavState = defineStore("navbarStore", () => {
	const isToggled = ref(false);
	const navlinks = ref([
		{
			link: "/",
			text: "首页",
		},
		{
			link: "/topics",
			text: "关注",
		},
	]);
	const toggle = () => {
		isToggled.value = !isToggled.value;
	};

	return {
		isToggled,
		navlinks,
		toggle,
	};
});
