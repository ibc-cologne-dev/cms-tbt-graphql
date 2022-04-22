export const typeDefs = `
  type ResourceType {
    id: ID!
    title: String!
  }

  enum Media {
    text
    audio
    video
    image
  }

  type MediaType {
    type: Media
    value: String
  }

  type Resource {
    id: ID!
    title: String
    image_header: String
    content: [MediaType]
    type: ResourceType
  }

  type Lesson {
    id: ID!
    title: String
    subtitle: String
    color: String
    resourceType: ResourceType
    resources: [Resource]
    number: Int
  }

  type ShortLessonItem {
    id: ID!
    title: String
    subtitle: String
    color: String
    number: Int
  }

  type Tbt {
    id: ID!
    title: String
    orderNumber: Int
  }

  type Query {
    tbts: [Tbt]
    lessons(tbtId: ID!): [ShortLessonItem]
    lessonResources(lessonId: ID!, tbtId: ID!): [Resource]
    lessonResource(lessonId: ID!, resourceId: ID!): Resource
  }
`;