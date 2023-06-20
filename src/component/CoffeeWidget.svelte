<script lang="ts">
  import type { Coffee } from "src/types/Coffee";
  import { onDestroy, onMount } from "svelte";
  import { CoffeeService } from "src/services/CoffeeService";
  import CoffeeList from "src/component/CoffeeList.svelte";

  let coffeeList: Coffee[] = [];

  let timeout: null | number = null;
  let isLoading = false;
  let delay = 30 * 1000;

  onMount(() => {
    addCoffee();
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });

  function clearDelayLoading() {
    clearTimeout(timeout);
  }

  function setDelayLoading() {
    timeout = setTimeout(addCoffee, delay);
  }

  async function addCoffee() {
    if (isLoading) {
      return;
    }

    try {
      clearDelayLoading();
      isLoading = true;
      const coffeeData = await CoffeeService.getCoffeeData();
      coffeeList = [...coffeeList, coffeeData];
    } catch (e) {
      console.error("Failed to load coffee");
    } finally {
      isLoading = false;
      setDelayLoading();
    }
  }

  $: disabled = isLoading;
</script>

<div class="coffee-widget">
  <CoffeeList {coffeeList} />
  <button class="btn coffee-widget__btn" on:click={addCoffee} {disabled}>
    {isLoading ? "Loading..." : "Add Coffee"}
  </button>
</div>
