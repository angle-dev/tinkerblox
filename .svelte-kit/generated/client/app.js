export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/buildingblox/edgeblox": [3],
		"/buildingblox/sandblox": [4],
		"/buildingblox/servblox": [5],
		"/comingsoon": [6],
		"/connect": [7],
		"/jobs": [8],
		"/ourcompany": [9],
		"/superblox/smartdevices": [10],
		"/superblox/smartindustry": [11],
		"/superblox/smartspaces": [12],
		"/superblox/smartutilities": [13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';