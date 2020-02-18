import home from '../views/home.vue'
import nav from '../components/navbar.vue'
import footer from '../components/footer.vue'
import profile from '../components/profile.vue'
import donation from '../components/donation.vue'
import donate from '../components/steps/donate.vue'
import info from '../components/steps/info.vue'
import payment from '../components/steps/payment.vue'
import done from '../components/steps/done.vue'

export const routes = [{
        path: '',
        components: {
            'nav': nav,
            default: home,
            'footer': footer
        },
        name: 'home'
    },
    {
        path: '/profile',
        components: {
            'nav': nav,
            default: profile
        },
        name: 'profile'
    },
    {
        path: '/donation',
        component: donation,
        children: [{
                path: '',
                component: donate,
                name: 'donate',
            },
            {
                path: '',
                component: info,
                name: 'info',
            },
            {
                path: '',
                component: payment,
                name: 'payment',
            },
            {
                path: '',
                component: done,
                name: 'done',
            }
        ]
    }
]