$ORACLE_HOME/bin/sqlplus -s $1/$2 << EOF
whenever sqlerror exit sql.sqlcode;
set echo off 
set heading off

@$3/clean_data.sql

exit;
EOF
