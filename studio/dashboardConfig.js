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
                  buildHookId: '5f33d8e827efd25e90c3c0fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wqqkqdut',
                  apiId: 'd4ab5dfb-1d82-42ac-ad97-3a6472cbed3c'
                },
                {
                  buildHookId: '5f33d8e85f7aed01057928e4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wmj7tjkf',
                  apiId: 'a29cc7e8-c920-459e-8470-d1c8f12c998f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saeedghotb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wmj7tjkf.netlify.app', category: 'apps'}
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
