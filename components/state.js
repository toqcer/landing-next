import { selector } from 'recoil';

const ourTeam = selector({
    key: 'our-team',
    get: async () => {
        let teams = [],
            status = 200;

        try {
            const resMembers = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=5',
            );

            const jsonMembers = await resMembers.json();
            resMembers.status !== 200
                ? (status = 'failed')
                : (status = 'success');

            teams = jsonMembers;
        } catch (error) {
            teams = error.message;
            status = 'failed';
        }

        return {
            status: status,
            data: teams,
        };
    },
});

export { ourTeam };
