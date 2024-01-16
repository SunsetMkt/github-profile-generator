import { icons } from '@/constants/skills'
import { socialForm } from '@/constants/social'
import { supportForm } from '@/constants/support'

export function Title(title: string) {
    return `
        <h1>${title}</h1>

    `
}

export function SubTitle(subTitle: string) {
    return `
        <p>${subTitle}</p>
        
    `
}

export function Skills(skills: string[]) {
    const skillsStr = skills.map((skill) => `<a target="_blank" href="${icons[skill]}" style="display: inline-block;"><img src="${icons[skill]}" alt="${skill}" width="42" height="42" /></a>`).join('\n')

    if (!skills.length) {
        return ''
    }

    return `
        <h2>🚀 Languages and Tools I Use</h2>
        <p>
            ${skillsStr}
        </p>

    `
}

export function Social(socials: any) {
    const socialList = Object.entries(socials).filter((item: any) => !!item[1])
    const socialStr = socialList.map((social: any) => {
        const socialName = social[0]
        const socialUser = social[1]
        const socialObj = socialForm.find(item => item.name === socialName)
        return `<a target="_blank" href="${socialObj?.link}${socialUser}" style="display: inline-block;"><img src="${socialObj?.shields}" alt="${socialName}" /></a>`
    }).join('\n')

    if (!Object.keys(socialList).length) {
        return ''
    }

    return `
        <h2>⚡️ Where to find me</h2>
        <p>
            ${socialStr}
        </p>

    `
}

export function Addons(addons: any, username: string) {
    let res = ''
    
    if (addons.profileStats) {
        res += `
            <p>
                <img align="center" src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en" alt="${username}" />
            </p>

        `
    }
    if (addons.streakStats) {
        res += `
            <p>
                <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&" alt="${username}" />
            </p>

        `
    }
    if (addons.visitorsCount) {
        res += `
            <p>
                <img src="https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact" alt="${username}" />
            </p>

        `
    }
    if (addons.trophy) {
        res += `
            <p>
                <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=${username}" alt="${username}" /></a>
            </p>

        `
    }

    return res
}

export function Posts(posts: any[]) {
    const postsHtml = posts.map((post) => `<li><a target="_blank" href="${post.link}">${post.text}</a></li>`).join('\n')

    if (!posts.length) {
        return ''
    }

    return `
        <h2>✒️ Recent Posts</h2>
        <ul>
            ${postsHtml}
        </ul>

    `
}

export function PostsFormItem(post: any) {
    const childNode = document.createElement('div')
    childNode.innerHTML = `
            <div class="col-span-6 sm:col-span-3">
                <label for="post_${post.index}" class="block text-sm font-medium text-gray-700">Text</label>
                <input type="text" name="post_${post.index}" id="post_${post.index}" data-index="${post.index}" value="${post.text}" class="generator-posts-text mt-1 p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="col-span-6 sm:col-span-3 mt-4">
                <label class="block text-sm font-medium text-gray-700">Link</label>
                <input type="text" name="post_${post.index}" id="post_${post.index}" data-index="${post.index}" value="${post.link}" class="generator-posts-link mt-1 p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <button class="removeItem block mx-auto mt-4 px-3 py-1.5 text-sm text-rose-500 duration-100 border border-rose-500 rounded-lg hover:text-red-800 hover:border-red-800" type="button" data-index="${post.index}">
                Remove Item
            </button>
            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>
    `

    return childNode
}

export function Supports(supports: any) {
    let supportsStr = ''
    for (const key in supports) {
        const username = supports[key]
        if (username) {
            supportsStr += `
                <p>
                    <a href="https://www.${key}.com/${username}">
                        <img src="${supportForm[key].icon}" width="160" alt="${key}" />
                    </a>
                </p>

            `
        }
    }

    if (supportsStr) {
        return `
            <h2>❤️ Support Me</h2>
            <p>
                ${supportsStr}
            </p>

        `
    } else {
        return ''
    }
}