import { tags } from "./mock";

const users = [
  {
    id: 0,
    email: 'vincenzo@admin.com',
    password: 'adm12345',
    photo: 'https://avatars.githubusercontent.com/u/79121466?v=4',
    fullName: 'Vincenzo Fedzuirek Di Giacomo',
    displayName: 'vincenzofdg',
    age: '27',
    bio: 'The guy who are developing this project',
    tags: [tags[1].name, tags[2].name, tags[3].name, tags[4].name, tags[5].name],
    postLiked: [],
    commentLiked: [],
  },
]

export default users;