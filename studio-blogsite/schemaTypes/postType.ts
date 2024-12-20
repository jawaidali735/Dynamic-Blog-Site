// import {defineField, defineType} from 'sanity'

// export const postType = defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {source: 'title'},
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'publishedAt',
//       type: 'datetime',
//       initialValue: () => new Date().toISOString(),
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'image',
//       type: 'image',
//     }),
//     defineField({
//       name: 'body',
//       type: 'array',
//       of: [{type: 'block'}],
//     }),
   
//   ],
// })

import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Allows for focus cropping
      },
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Lifestyle', value: 'Lifestyle'},
          {title: 'Technology', value: 'Technology'},
          {title: 'Startup', value: 'Startup'},
        ], // Add more categories as needed
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author_img',
      type: 'image',
      title: 'Author Image',
      options: {
        hotspot: true, // Allows for focus cropping
      },
    }),
  ],
});
