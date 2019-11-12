// module.exports = {
//   /**
//    * Database Connection Settings
//    */
//   'connection':
//     'rxdb', // Application connection
//
//   /**
//    * List of available connections
//    */
//   'connections':
//     {
//       /**
//        * RXDB connection options example
//        *
//        * RxDB (short for Reactive Database) is a NoSQL-database for
//        * JavaScript Applications like Websites, hybrid Apps, Electron-Apps
// and * NodeJs. * @link https://rxdb.info/ */ 'rxdb': { /** *
// ----------------------------------------------------------------------- * #
// Database Name *
// ----------------------------------------------------------------------- *
// The database-name is a string which uniquely identifies the * database. When
// two RxDatabases have the same name and use the same * storage-adapter, their
// data can be assumed as equal and they will * share change-events between
// each other. Depending on the adapter * this can also be used to define the
// storage-folder of your data. */ name: 'electronJSDB', /** *
// ----------------------------------------------------------------------- * #
// Adapter *
// ----------------------------------------------------------------------- *
// RxDB uses adapters to define where the data is actually stored at. * You can
// use different adapters depending on which environment your * database runs
// in. This has the advantage that you can use the same * RxDB code in
// different environments and just switch out the * adapter. * * @link (List of
// adapters)[https://rxdb.info/adapters.html] */ adapter: 'memdown' /** *
// ----------------------------------------------------------------------- * #
// Password (Optional) *
// ----------------------------------------------------------------------- * If
// you want to use encrypted fields in the collections of a * database, you
// have to set a password for it. The password must be * a string with at least
// 12 characters. */ // password: 'secret',  /** *
// ----------------------------------------------------------------------- * #
// multiInstance(optional = true) *
// ----------------------------------------------------------------------- *
// When you create more than one instance of the same database in a * single
// javascript - runtime, you should set multiInstance to true. * This will
// enable the event - sharing between the two instances * serverless.This
// should be set to false when you have * single - instances like a single
// nodejs - process or a single - window * electron - app. * / multiInstance:
// false,  / * * *
// ----------------------------------------------------------------------- * #
// queryChangeDetection(optional = false) *
// ----------------------------------------------------------------------- *
// This enables the QueryChangeDetection for the database. * @link
// [QueryChangeDetection](https ://rxdb.info/query-change-detection.html) */
// queryChangeDetection: false,  /** *
// ----------------------------------------------------------------------- * #
// Skip Setup *
// ----------------------------------------------------------------------- *
// Initially PouchDB checks if the database exists, and tries to * create it,
// if it does not exist yet. Set this to true to skip this * setup. */
// skip_setup : true,  /** *
// ----------------------------------------------------------------------- *
// For more options and documentation *
// ----------------------------------------------------------------------- *
// Follow the following links * @link
// [RxDatabase](https://rxdb.info/rx-database.html#pouchSettings) * @link
// [pouchdb-database-create-options](https://pouchdb.com/api.html#options) */ }
// ,  //TODO: add more DB connections } , }

module.exports = {
  connection: 'rxdb', // Application connection
  connections: {
    rxdb: {},
  },
}