<template>
  <div class="relative">
    <button
      @click="open=!open"
      type="button"
      class="group text-gray-700 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
    >
      <span>{{$t($i18n.locale)}}</span>
      <svg
        class="h-5 w-5 group-hover:text-white group-focus:text-white transition ease-in-out duration-150"
        :class="open?'text-gray-600':'text-white'"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-show="open"
        class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-max-content md:max-w-xs sm:px-0 text-sm"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <g-link
                :to="$tp($route.path, 'it-it', true)"
                @click.native="notifyLocaleChanged('it-it')"
                class="-m-3 p-3 block rounded-md transition ease-in-out duration-150"
              >
                Italiano
                <span class="text-sm text-gray-600">({{$t('it-it')}})</span>
              </g-link>
              <g-link
                :to="$tp($route.path, 'en-us', true)"
                @click.native="notifyLocaleChanged('en-us')"
                class="-m-3 p-3 block rounded-md transition ease-in-out duration-150"
              >
                English
                <span class="text-sm text-gray-600">({{$t('en-us')}})</span>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      open: false
    };
  },
  methods: {
    notifyLocaleChanged(locale) {
      this.open = false;
      const event = new CustomEvent('locale-changed', { detail: locale })
      window.dispatchEvent(event);
    }
  }
};
</script>