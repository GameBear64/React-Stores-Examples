import { computed } from 'nanostores';
import { $users } from './users.js';

export const $admins = computed($users, users => users.filter(u => u.isAdmin));

// runs every time $admins changes, can be used on $users too, on any store actually
$admins.subscribe(value => {
  console.log('nano watcher sees:', value);
});
