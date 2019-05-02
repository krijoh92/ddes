/**
 * @module @ddes/gcp-store
 */
export interface MetaItem {
  p: string
  v: string
  x?: number
}
export interface Snapshot {
  data: string
}

export interface FirestoreConfig {
  projectId?: string
  tableName: string
  [x: string]: any
}

export interface MarshalledCommitProperty {
  name: string
  value: string
  excludeFromIndexes?: boolean
}

export interface MarshalledCommit {
  /**
   * Aggregate stream id type e.g. 'Order:123' (table partition key)
   */
  s: string

  /**
   * Aggregate version (table sort key)
   */
  v: number

  /**
   * Chronological sort key (chronological index sort key)
   */
  g: string

  /**
   * Aggregate type
   */
  a: string

  /**
   * Aggregate root commit key (only set for version = 1 commits)
   */
  r: string

  /**
   * Commit timestamp
   */
  t: number

  /**
   * Events in gzipped JSON form
   */
  e: string

  /**
   * TTL timestamp (commit will be deleted at the set time)
   */
  x: string

  /**
   * Chronological index partition key
   *
   */
  p: string
}

/**
 * @hidden
 */
export interface FirestoreEventStoreBatchMutatorQueueItem {
  startedPromise: Promise<any>
  startedResolver: () => void
  processedPromise: Promise<any>
  processedResolver: () => void
  processing: boolean
  item: any
  capacityUnits: number
}