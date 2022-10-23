import axios, { AxiosResponse } from 'axios';

type InitialItem = {
	name: string;
	url: string;
	data: {
		attributes: [
			{
				name: 'countable';
				url: 'https://pokeapi.co/api/v2/item-attribute/1/';
			},
			{
				name: 'consumable';
				url: 'https://pokeapi.co/api/v2/item-attribute/2/';
			},
			{
				name: 'usable-in-battle';
				url: 'https://pokeapi.co/api/v2/item-attribute/4/';
			},
			{
				name: 'holdable';
				url: 'https://pokeapi.co/api/v2/item-attribute/5/';
			}
		];
		baby_trigger_for: null;
		category: {
			name: 'standard-balls';
			url: 'https://pokeapi.co/api/v2/item-category/34/';
		};
		cost: 0;
		effect_entries: [
			{
				effect: 'Used in battle\n:   Catches a wild Pokémon without fail.\n\n    If used in a trainer battle, nothing happens and the ball is lost.';
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				short_effect: 'Catches a wild Pokémon every time.';
			}
		];
		flavor_text_entries: [
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best BALL that\ncatches a POKéMON\nwithout fail.';
				version_group: {
					name: 'ruby-sapphire';
					url: 'https://pokeapi.co/api/v2/version-group/5/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best BALL that\ncatches a POKéMON\nwithout fail.';
				version_group: {
					name: 'emerald';
					url: 'https://pokeapi.co/api/v2/version-group/6/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best BALL with the ultimate\nperformance. It will catch any wild\nPOKéMON without fail.';
				version_group: {
					name: 'firered-leafgreen';
					url: 'https://pokeapi.co/api/v2/version-group/7/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'diamond-pearl';
					url: 'https://pokeapi.co/api/v2/version-group/8/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'platinum';
					url: 'https://pokeapi.co/api/v2/version-group/9/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'heartgold-soulsilver';
					url: 'https://pokeapi.co/api/v2/version-group/10/';
				};
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				text: 'Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un\nPokémon sauvage.';
				version_group: {
					name: 'black-white';
					url: 'https://pokeapi.co/api/v2/version-group/11/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'black-white';
					url: 'https://pokeapi.co/api/v2/version-group/11/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'black-2-white-2';
					url: 'https://pokeapi.co/api/v2/version-group/14/';
				};
			},
			{
				language: {
					name: 'ja-Hrkt';
					url: 'https://pokeapi.co/api/v2/language/1/';
				};
				text: 'やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'ko';
					url: 'https://pokeapi.co/api/v2/language/3/';
				};
				text: '야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				text: 'Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'de';
					url: 'https://pokeapi.co/api/v2/language/6/';
				};
				text: 'Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'es';
					url: 'https://pokeapi.co/api/v2/language/7/';
				};
				text: 'La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'it';
					url: 'https://pokeapi.co/api/v2/language/8/';
				};
				text: 'La Poké Ball dalle prestazioni migliori:\ncattura qualsiasi Pokémon selvatico senza\nmai fallire.';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Poké Ball with the ultimate\nlevel of performance. With it, you will\ncatch any wild Pokémon without fail.';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'ja';
					url: 'https://pokeapi.co/api/v2/language/11/';
				};
				text: '野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。';
				version_group: {
					name: 'x-y';
					url: 'https://pokeapi.co/api/v2/version-group/15/';
				};
			},
			{
				language: {
					name: 'ja-Hrkt';
					url: 'https://pokeapi.co/api/v2/language/1/';
				};
				text: 'やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'ko';
					url: 'https://pokeapi.co/api/v2/language/3/';
				};
				text: '야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'zh-Hant';
					url: 'https://pokeapi.co/api/v2/language/4/';
				};
				text: '性能最好的球。\n必定能捉到野生寶可夢。';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				text: 'Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'de';
					url: 'https://pokeapi.co/api/v2/language/6/';
				};
				text: 'Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'es';
					url: 'https://pokeapi.co/api/v2/language/7/';
				};
				text: 'La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'it';
					url: 'https://pokeapi.co/api/v2/language/8/';
				};
				text: 'La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'ja';
					url: 'https://pokeapi.co/api/v2/language/11/';
				};
				text: '野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'zh-Hans';
					url: 'https://pokeapi.co/api/v2/language/12/';
				};
				text: '必定能捉到野生宝可梦的，\n性能最好的球。';
				version_group: {
					name: 'sun-moon';
					url: 'https://pokeapi.co/api/v2/version-group/17/';
				};
			},
			{
				language: {
					name: 'ja-Hrkt';
					url: 'https://pokeapi.co/api/v2/language/1/';
				};
				text: 'やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'ko';
					url: 'https://pokeapi.co/api/v2/language/3/';
				};
				text: '야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'zh-Hant';
					url: 'https://pokeapi.co/api/v2/language/4/';
				};
				text: '性能最好的球。\n必定能捉到野生寶可夢。';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				text: 'Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'de';
					url: 'https://pokeapi.co/api/v2/language/6/';
				};
				text: 'Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'es';
					url: 'https://pokeapi.co/api/v2/language/7/';
				};
				text: 'La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'it';
					url: 'https://pokeapi.co/api/v2/language/8/';
				};
				text: 'La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'ja';
					url: 'https://pokeapi.co/api/v2/language/11/';
				};
				text: '野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'zh-Hans';
					url: 'https://pokeapi.co/api/v2/language/12/';
				};
				text: '必定能捉到野生宝可梦的，\n性能最好的球。';
				version_group: {
					name: 'ultra-sun-ultra-moon';
					url: 'https://pokeapi.co/api/v2/version-group/18/';
				};
			},
			{
				language: {
					name: 'ja-Hrkt';
					url: 'https://pokeapi.co/api/v2/language/1/';
				};
				text: 'やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'ko';
					url: 'https://pokeapi.co/api/v2/language/3/';
				};
				text: '야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'zh-Hant';
					url: 'https://pokeapi.co/api/v2/language/4/';
				};
				text: '性能最好的球。\n必定能捉到野生寶可夢。';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				text: 'Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'de';
					url: 'https://pokeapi.co/api/v2/language/6/';
				};
				text: 'Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'es';
					url: 'https://pokeapi.co/api/v2/language/7/';
				};
				text: 'La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'it';
					url: 'https://pokeapi.co/api/v2/language/8/';
				};
				text: 'La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'ja';
					url: 'https://pokeapi.co/api/v2/language/11/';
				};
				text: '野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'zh-Hans';
					url: 'https://pokeapi.co/api/v2/language/12/';
				};
				text: '必定能捉到野生宝可梦的，\n性能最好的球。';
				version_group: {
					name: 'lets-go-pikachu-lets-go-eevee';
					url: 'https://pokeapi.co/api/v2/version-group/19/';
				};
			},
			{
				language: {
					name: 'ja-Hrkt';
					url: 'https://pokeapi.co/api/v2/language/1/';
				};
				text: 'やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'ko';
					url: 'https://pokeapi.co/api/v2/language/3/';
				};
				text: '야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'zh-Hant';
					url: 'https://pokeapi.co/api/v2/language/4/';
				};
				text: '性能最好的球。\n必定能捉到野生寶可夢。';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				text: 'Assurément la Poké Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'de';
					url: 'https://pokeapi.co/api/v2/language/6/';
				};
				text: 'Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'es';
					url: 'https://pokeapi.co/api/v2/language/7/';
				};
				text: 'La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'it';
					url: 'https://pokeapi.co/api/v2/language/8/';
				};
				text: 'La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				text: 'The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'ja';
					url: 'https://pokeapi.co/api/v2/language/11/';
				};
				text: '野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			},
			{
				language: {
					name: 'zh-Hans';
					url: 'https://pokeapi.co/api/v2/language/12/';
				};
				text: '必定能捉到野生宝可梦的，\n性能最好的球。';
				version_group: {
					name: 'sword-shield';
					url: 'https://pokeapi.co/api/v2/version-group/20/';
				};
			}
		];
		fling_effect: null;
		fling_power: null;
		game_indices: [
			{
				game_index: 1;
				generation: {
					name: 'generation-iii';
					url: 'https://pokeapi.co/api/v2/generation/3/';
				};
			},
			{
				game_index: 1;
				generation: {
					name: 'generation-iv';
					url: 'https://pokeapi.co/api/v2/generation/4/';
				};
			},
			{
				game_index: 1;
				generation: {
					name: 'generation-v';
					url: 'https://pokeapi.co/api/v2/generation/5/';
				};
			},
			{
				game_index: 1;
				generation: {
					name: 'generation-vi';
					url: 'https://pokeapi.co/api/v2/generation/6/';
				};
			},
			{
				game_index: 1;
				generation: {
					name: 'generation-vii';
					url: 'https://pokeapi.co/api/v2/generation/7/';
				};
			},
			{
				game_index: 1;
				generation: {
					name: 'generation-viii';
					url: 'https://pokeapi.co/api/v2/generation/8/';
				};
			}
		];
		held_by_pokemon: [];
		id: 1;
		machines: [];
		name: 'master-ball';
		names: [
			{
				language: {
					name: 'ja-Hrkt';
					url: 'https://pokeapi.co/api/v2/language/1/';
				};
				name: 'マスターボール';
			},
			{
				language: {
					name: 'ko';
					url: 'https://pokeapi.co/api/v2/language/3/';
				};
				name: '마스터볼';
			},
			{
				language: {
					name: 'zh-Hant';
					url: 'https://pokeapi.co/api/v2/language/4/';
				};
				name: '大師球';
			},
			{
				language: {
					name: 'fr';
					url: 'https://pokeapi.co/api/v2/language/5/';
				};
				name: 'Master Ball';
			},
			{
				language: {
					name: 'de';
					url: 'https://pokeapi.co/api/v2/language/6/';
				};
				name: 'Meisterball';
			},
			{
				language: {
					name: 'es';
					url: 'https://pokeapi.co/api/v2/language/7/';
				};
				name: 'Master Ball';
			},
			{
				language: {
					name: 'it';
					url: 'https://pokeapi.co/api/v2/language/8/';
				};
				name: 'Master Ball';
			},
			{
				language: {
					name: 'en';
					url: 'https://pokeapi.co/api/v2/language/9/';
				};
				name: 'Master Ball';
			},
			{
				language: {
					name: 'ja';
					url: 'https://pokeapi.co/api/v2/language/11/';
				};
				name: 'マスターボール';
			},
			{
				language: {
					name: 'zh-Hans';
					url: 'https://pokeapi.co/api/v2/language/12/';
				};
				name: '大师球';
			}
		];
		sprites: {
			default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png';
		};
	};
};

let RawItems: InitialItem[] = [];

export const GetItems = async () => {
	await axios
		.get('https://pokeapi.co/api/v2/item?offset=0&limit=10000000')
		.then((result) => {
			result.data.results.forEach((result: InitialItem, index: number) => {
				axios.get(result.url).then((ItemData) => {
					RawItems.push({
						name: result.name,
						url: result.url,
						data: ItemData.data,
					});
				});
			});
		});

	return RawItems;
};
