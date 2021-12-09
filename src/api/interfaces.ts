export interface response {
  hits: hit[];
  page: number;
  nbHits: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  query: string;
  params: string;
}

export interface book {
  title: string;
  author: string;
  url: string;
}

interface hit {
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text: string;
  num_comments: number;
  objectID: string;
  _tags: string[];
  _highlightResult: highlightResult;
}

interface highlightResult {
  title: {
    value: string;
    matchLevel: string;
    matchedWords: string[];
  };
  url: {
    value: string;
    matchLevel: string;
    matchedWords: string[];
  };
  author: {
    value: string;
    matchLevel: string;
    matchedWords: string[];
  };
}
