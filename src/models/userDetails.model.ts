export interface userDetails {
    personalDetails: {
        fullname: string
    }[]
    achievements: {
          name: string,
          class: string,
          img: string,
          level: number,
          active: string
    }[]
    notes: {
        timeStamp: string,
        title: string,
        text: string,
        selected: Boolean
    }[]
    subjects: {
        subject: string, 
        value:  string ,
        style: string, 
        selected: Boolean
    }[]
    selectedSubjects: {
        subject: string, 
        value:  string,
        image: string, 
        topics: any
    }[]
    subjectDetails: {
        subject: string, 
        value: string, 
        image: string,
        topics: any
      }[]
}