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

  enum SORT {
    asc
    desc
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

  type Audio {
    id: ID!
    file: String!
    title: String!
    audio_duration: Int!
    artist: String!
  }

  type Query {
    tbts: [Tbt]
    audios: [Audio]
    lessons(tbtId: ID!, sort: SORT): [ShortLessonItem]
    lessonResources(lessonId: ID!, tbtId: ID!): [Resource]
    lessonResource(lessonId: ID!, resourceId: ID!): Resource
  }
`;