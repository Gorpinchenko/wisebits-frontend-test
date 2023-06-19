<script lang="ts">
  import type {Coffee} from 'src/types/Coffee';
  import defaultImage from 'src/assets/img/svelte.svg';

  export let coffeeList: Coffee[] = [];
</script>

<ul class="coffee-list">
    {#each coffeeList as coffee}
        <li class="coffee-card">
            <div class="coffee-card__img-wrapper"
                 style="background-image: url({defaultImage});"
            >
                <img
                        class="coffee-card__img"
                        src="https://loremflickr.com/500/500/coffee,bean?random={coffee.id}"
                        alt="{coffee.blend_name}"
                >
            </div>
            <div class="coffee-card__origin">{coffee.origin}</div>
            <div class="coffee-card__title">{coffee.blend_name}</div>
            <div class="coffee-card__description">{coffee.variety}</div>
            <div class="coffee-card__tags">
                {#each coffee.notes.split(', ') as note}
                    <div class="coffee-card__tag">{note}</div>
                {/each}
            </div>
            <div class="coffee-card__label">{coffee.intensifier}</div>
        </li>
    {/each}
</ul>
