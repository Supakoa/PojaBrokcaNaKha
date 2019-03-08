using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Petition
{
    #region Subject
    public class Subject
    {
        #region Member Variables
        protected string _sub_id;
        protected string _sub_name;
        protected string _main_pro;
        #endregion
        #region Constructors
        public Subject() { }
        public Subject(string sub_id, string sub_name, string main_pro)
        {
            this._sub_id=sub_id;
            this._sub_name=sub_name;
            this._main_pro=main_pro;
        }
        #endregion
        #region Public Properties
        public virtual string Sub_id
        {
            get {return _sub_id;}
            set {_sub_id=value;}
        }
        public virtual string Sub_name
        {
            get {return _sub_name;}
            set {_sub_name=value;}
        }
        public virtual string Main_pro
        {
            get {return _main_pro;}
            set {_main_pro=value;}
        }
        #endregion
    }
    #endregion
}