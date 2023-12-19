import { writable, derived } from 'react-use-svelte-store';

export const users = writable([]);

export const admins = derived(users, $users => $users.filter(user => user.isAdmin));
