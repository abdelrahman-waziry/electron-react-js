module.exports = {
  /**
   * ---------------------------------------------------------------------------
   * Application connection
   * ---------------------------------------------------------------------------
   * This key is used to set the application database connection options.
   * The only available option now is 'rxdb'.
   *
   * TODO: Support more database connections
   */
  connection: 'rxdb',

  /**
   * ---------------------------------------------------------------------------
   * The List of available connections settings
   * ---------------------------------------------------------------------------
   * The following key contains the list of available connections settings
   * and options
   */
  connections: {
    /**
     * -------------------------------------------------------------------------
     * RxDB
     * -------------------------------------------------------------------------
     * RxDB (short for Reactive Database) is a NoSQL-database for JavaScript
     * Applications like Websites, hybrid Apps, Electron-Apps and NodeJs.
     * Reactive means that you can not only query the current state, but
     * subscribe to all state-changes like the result of a query or even a
     * single field of a document. This is useful for UI-based apps that always
     * display the realtime state to the user. RxDB can do a realtime
     * replication with any CouchDB compliant endpoint and also with GraphQL
     * endpoints.
     */
    rxdb: {
      /**
       * -----------------------------------------------------------------------
       * Database Name
       * -----------------------------------------------------------------------
       * The database-name is a string which uniquely identifies the database.
       * When two RxDatabases have the same name and use the same
       * storage-adapter, their data can be assumed as equal and they will
       * share change-events between each other. Depending on the adapter this
       * can also be used to define the storage-folder of your data.
       */
      name: 'electronJSDB',

      /**
       * -----------------------------------------------------------------------
       * adapter
       * -----------------------------------------------------------------------
       * RxDB uses adapters to define where the data is actually stored at. You
       * can use different adapters depending on which environment your
       * database runs in. This has the advantage that you can use the same
       * RxDB code in different environments and just switch out the adapter.
       */
      adapter: 'memdown',

      /**
       * -----------------------------------------------------------------------
       * multiInstance
       * -----------------------------------------------------------------------
       * When you create more than one instance of the same database in a
       * single javascript-runtime, you should set multiInstance to true. This
       * will enable the event-sharing between the two instances serverless.
       * This should be set to false when you have single-instances like a
       * single nodejs-process, a react-native-app, a cordova-app or a
       * single-window electron-app.
       */
      multiInstance: false,

      /**
       * -----------------------------------------------------------------------
       * queryChangeDetection
       * -----------------------------------------------------------------------
       * If set to true, this enables the QueryChangeDetection for the database.
       * @link https://rxdb.info/query-change-detection.html
       */
      queryChangeDetection: false,

      /**
       * -----------------------------------------------------------------------
       * pouchSettings
       * -----------------------------------------------------------------------
       * You can pass settings directly to the pouchdb database create options
       * through this property. This settings will be added to all
       * pouchdb-instances that are created for this database.
       * @link https://pouchdb.com/api.html#options
       */

      /**
       * -----------------------------------------------------------------------
       * Skip Setup
       * -----------------------------------------------------------------------
       * Initially PouchDB checks if the database exists, and tries to create
       * it, if it does not exist yet. Set this to true to skip this
       */
      skip_setup: true,
    },
  },
}