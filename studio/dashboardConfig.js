export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd98c77cf852eaf0acb5eb5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fncfennc',
                  apiId: 'd6aacfa6-7d21-47b0-81e8-8ebd9491d876'
                },
                {
                  buildHookId: '5cd98c7747a8496cb6bcfe5b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1v5y4c2m',
                  apiId: '3091125e-2fd5-4d67-84e3-e853746f83b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peterthomasross/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1v5y4c2m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
