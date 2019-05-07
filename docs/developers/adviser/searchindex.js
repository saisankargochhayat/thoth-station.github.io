Search.setIndex({docnames:["dependency_graph","dependency_monkey","index","libdependency_graph","pipeline","provenance_checks","thoth.adviser","thoth.adviser.python","thoth.adviser.python.bin","thoth.adviser.python.pipeline","thoth.adviser.python.pipeline.steps","thoth.adviser.python.pipeline.strides","thoth.adviser.python.pipeline.units"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["dependency_graph.rst","dependency_monkey.rst","index.rst","libdependency_graph.rst","pipeline.rst","provenance_checks.rst","thoth.adviser.rst","thoth.adviser.python.rst","thoth.adviser.python.bin.rst","thoth.adviser.python.pipeline.rst","thoth.adviser.python.pipeline.steps.rst","thoth.adviser.python.pipeline.strides.rst","thoth.adviser.python.pipeline.units.rst"],objects:{"thoth.adviser":{cli:[6,0,0,"-"],configuration:[6,0,0,"-"],enums:[6,0,0,"-"],exceptions:[6,0,0,"-"],isis:[6,0,0,"-"],python:[7,0,0,"-"]},"thoth.adviser.enums":{DecisionType:[6,1,1,""],Ecosystem:[6,1,1,""],PythonRecommendationOutput:[6,1,1,""],RecommendationType:[6,1,1,""]},"thoth.adviser.enums.DecisionType":{ALL:[6,2,1,""],RANDOM:[6,2,1,""]},"thoth.adviser.enums.Ecosystem":{PYTHON:[6,2,1,""]},"thoth.adviser.enums.PythonRecommendationOutput":{PIPENV:[6,2,1,""],REQUIREMENTS:[6,2,1,""]},"thoth.adviser.enums.RecommendationType":{LATEST:[6,2,1,""],STABLE:[6,2,1,""],TESTING:[6,2,1,""]},"thoth.adviser.exceptions":{InternalError:[6,3,1,""],NotFound:[6,3,1,""],PipfileParseError:[6,3,1,""],ThothAdviserException:[6,3,1,""],UnsupportedConfiguration:[6,3,1,""],VersionIdentifierError:[6,3,1,""]},"thoth.adviser.isis":{Isis:[6,1,1,""]},"thoth.adviser.isis.Isis":{get_python_package_performance_impact_all:[6,4,1,""],get_python_project_performance_import:[6,2,1,""]},"thoth.adviser.python":{advise:[7,0,0,"-"],bin:[8,0,0,"-"],dependency_monkey:[7,0,0,"-"],digests_fetcher:[7,0,0,"-"],exceptions:[7,0,0,"-"],pipeline:[9,0,0,"-"],pipeline_configuration:[7,0,0,"-"],solver:[7,0,0,"-"]},"thoth.adviser.python.advise":{Adviser:[7,1,1,""]},"thoth.adviser.python.advise.Adviser":{compute:[7,4,1,""],compute_on_project:[7,5,1,""],count:[7,2,1,""],limit:[7,2,1,""],recommendation_type:[7,2,1,""]},"thoth.adviser.python.bin":{dependency_graph:[8,0,0,"-"],exceptions:[8,0,0,"-"]},"thoth.adviser.python.bin.dependency_graph":{DependencyGraph:[8,1,1,""]},"thoth.adviser.python.bin.dependency_graph.DependencyGraph":{STREAM_DELIMITER:[8,2,1,""],STREAM_STOP:[8,2,1,""],stacks_estimated:[8,2,1,""],walk:[8,4,1,""]},"thoth.adviser.python.bin.exceptions":{DependencyGraphException:[8,3,1,""],NoDependenciesError:[8,3,1,""],PrematureStreamEndError:[8,3,1,""]},"thoth.adviser.python.dependency_monkey":{dependency_monkey:[7,6,1,""],dm_amun_inspect_wrapper:[7,6,1,""]},"thoth.adviser.python.digests_fetcher":{GraphDigestsFetcher:[7,1,1,""]},"thoth.adviser.python.digests_fetcher.GraphDigestsFetcher":{fetch_digests:[7,4,1,""]},"thoth.adviser.python.exceptions":{ConstraintClashError:[7,3,1,""],DirectDependencyRemoval:[7,3,1,""],UnableLock:[7,3,1,""]},"thoth.adviser.python.pipeline":{context_base:[9,0,0,"-"],exceptions:[9,0,0,"-"],pipeline:[9,0,0,"-"],product:[9,0,0,"-"],stack_candidates:[9,0,0,"-"],stats_base:[9,0,0,"-"],step:[9,0,0,"-"],step_context:[9,0,0,"-"],step_stats:[9,0,0,"-"],steps:[10,0,0,"-"],stride:[9,0,0,"-"],stride_context:[9,0,0,"-"],stride_stats:[9,0,0,"-"],strides:[11,0,0,"-"],unit_base:[9,0,0,"-"],units:[12,0,0,"-"]},"thoth.adviser.python.pipeline.context_base":{ContextBase:[9,1,1,""]},"thoth.adviser.python.pipeline.context_base.ContextBase":{stats:[9,2,1,""]},"thoth.adviser.python.pipeline.exceptions":{CannotRemovePackage:[9,3,1,""],PipelineExceptionBase:[9,3,1,""],StrideRemoveStack:[9,3,1,""]},"thoth.adviser.python.pipeline.pipeline":{Pipeline:[9,1,1,""]},"thoth.adviser.python.pipeline.pipeline.Pipeline":{conduct:[9,4,1,""],get_stack_info:[9,4,1,""],solver:[9,2,1,""]},"thoth.adviser.python.pipeline.product":{PipelineProduct:[9,1,1,""]},"thoth.adviser.python.pipeline.product.PipelineProduct":{finalize:[9,4,1,""],justification:[9,2,1,""],project:[9,2,1,""],score:[9,2,1,""]},"thoth.adviser.python.pipeline.stack_candidates":{StackCandidates:[9,1,1,""]},"thoth.adviser.python.pipeline.stack_candidates.StackCandidates":{add:[9,4,1,""],count:[9,2,1,""],direct_dependencies_map:[9,2,1,""],generate_pipeline_products:[9,4,1,""],get_package_version_tuple:[9,4,1,""],input_project:[9,2,1,""],transitive_dependencies_map:[9,2,1,""]},"thoth.adviser.python.pipeline.stats_base":{StatsBase:[9,1,1,""]},"thoth.adviser.python.pipeline.stats_base.StatsBase":{get_duration:[9,4,1,""],log_report:[9,4,1,""],reset_stats:[9,4,1,""],start_time:[9,2,1,""],start_timer:[9,4,1,""]},"thoth.adviser.python.pipeline.step":{Step:[9,1,1,""]},"thoth.adviser.python.pipeline.step.Step":{run:[9,4,1,""]},"thoth.adviser.python.pipeline.step_context":{StepContext:[9,1,1,""]},"thoth.adviser.python.pipeline.step_context.StepContext":{add_paths:[9,4,1,""],add_resolved_direct_dependency:[9,4,1,""],change:[9,4,1,""],direct_dependencies_map:[9,2,1,""],final_sort:[9,4,1,""],get_package_version_tuple:[9,4,1,""],iter_all_dependencies:[9,4,1,""],iter_all_dependencies_tuple:[9,4,1,""],iter_direct_dependencies:[9,4,1,""],iter_direct_dependencies_tuple:[9,4,1,""],iter_paths_with_score:[9,4,1,""],iter_transitive_dependencies:[9,4,1,""],iter_transitive_dependencies_tuple:[9,4,1,""],raw_paths:[9,2,1,""],remove_package_tuple:[9,4,1,""],score_package_tuple:[9,4,1,""],score_path_index:[9,4,1,""],sort_direct_dependencies:[9,4,1,""],sort_paths:[9,4,1,""],stats:[9,2,1,""],transitive_dependencies_map:[9,2,1,""]},"thoth.adviser.python.pipeline.step_stats":{StepStats:[9,1,1,""]},"thoth.adviser.python.pipeline.step_stats.StepStats":{log_report:[9,4,1,""]},"thoth.adviser.python.pipeline.steps":{buildtime_error:[10,0,0,"-"],cve:[10,0,0,"-"],limit_latest_versions:[10,0,0,"-"],performance_adjustment:[10,0,0,"-"],prereleases:[10,0,0,"-"],restrict_indexes:[10,0,0,"-"],runtime_error:[10,0,0,"-"],semver_sort:[10,0,0,"-"],toolchain:[10,0,0,"-"],unreachable:[10,0,0,"-"]},"thoth.adviser.python.pipeline.steps.buildtime_error":{BuildtimeErrorFiltering:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.buildtime_error.BuildtimeErrorFiltering":{run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.cve":{CvePenalization:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.cve.CvePenalization":{PARAMETERS_DEFAULT:[10,2,1,""],run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.limit_latest_versions":{LimitLatestVersions:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.limit_latest_versions.LimitLatestVersions":{PARAMETERS_DEFAULT:[10,2,1,""],run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.performance_adjustment":{PerformanceAdjustment:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.performance_adjustment.PerformanceAdjustment":{PARAMETERS_DEFAULT:[10,2,1,""],run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.prereleases":{CutPreReleases:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.prereleases.CutPreReleases":{run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.restrict_indexes":{RestrictIndexes:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.restrict_indexes.RestrictIndexes":{run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.runtime_error":{RuntimeErrorFiltering:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.runtime_error.RuntimeErrorFiltering":{run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.semver_sort":{SemverSort:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.semver_sort.SemverSort":{run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.toolchain":{CutToolchain:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.toolchain.CutToolchain":{is_toolchain:[10,4,1,""],run:[10,4,1,""]},"thoth.adviser.python.pipeline.steps.unreachable":{CutUnreachable:[10,1,1,""]},"thoth.adviser.python.pipeline.steps.unreachable.CutUnreachable":{run:[10,4,1,""]},"thoth.adviser.python.pipeline.stride":{Stride:[9,1,1,""]},"thoth.adviser.python.pipeline.stride.Stride":{run:[9,4,1,""]},"thoth.adviser.python.pipeline.stride_context":{StrideContext:[9,1,1,""]},"thoth.adviser.python.pipeline.stride_context.StrideContext":{adjust_score:[9,4,1,""],justification:[9,2,1,""],score:[9,2,1,""],stack_candidate:[9,2,1,""]},"thoth.adviser.python.pipeline.stride_stats":{StrideStats:[9,1,1,""]},"thoth.adviser.python.pipeline.stride_stats.StrideStats":{log_report:[9,4,1,""]},"thoth.adviser.python.pipeline.strides":{cve:[11,0,0,"-"],performance_scoring:[11,0,0,"-"],random_decision:[11,0,0,"-"],score_filter:[11,0,0,"-"]},"thoth.adviser.python.pipeline.strides.cve":{CveScoring:[11,1,1,""]},"thoth.adviser.python.pipeline.strides.cve.CveScoring":{PARAMETERS_DEFAULT:[11,2,1,""],run:[11,4,1,""]},"thoth.adviser.python.pipeline.strides.performance_scoring":{PerformanceScoring:[11,1,1,""]},"thoth.adviser.python.pipeline.strides.performance_scoring.PerformanceScoring":{PARAMETERS_DEFAULT:[11,2,1,""],run:[11,4,1,""]},"thoth.adviser.python.pipeline.strides.random_decision":{RandomDecision:[11,1,1,""]},"thoth.adviser.python.pipeline.strides.random_decision.RandomDecision":{run:[11,4,1,""]},"thoth.adviser.python.pipeline.strides.score_filter":{ScoreFiltering:[11,1,1,""]},"thoth.adviser.python.pipeline.strides.score_filter.ScoreFiltering":{run:[11,4,1,""]},"thoth.adviser.python.pipeline.unit_base":{PipelineUnitBase:[9,1,1,""]},"thoth.adviser.python.pipeline.unit_base.PipelineUnitBase":{PARAMETERS_DEFAULT:[9,2,1,""],PARAMETERS_SCHEMA:[9,2,1,""],graph:[9,2,1,""],name:[9,2,1,""],parameters:[9,2,1,""],project:[9,2,1,""],run:[9,4,1,""],to_dict:[9,4,1,""],update_parameters:[9,4,1,""]},"thoth.adviser.python.pipeline.units":{cve:[12,0,0,"-"],performance:[12,0,0,"-"]},"thoth.adviser.python.pipeline.units.cve":{get_cve_records:[12,6,1,""]},"thoth.adviser.python.pipeline.units.performance":{get_performance:[12,6,1,""],get_performance_impact_packages:[12,6,1,""]},"thoth.adviser.python.pipeline_configuration":{PipelineConfig:[7,1,1,""],PipelineConfigAdviser:[7,1,1,""],PipelineConfigDependencyMonkey:[7,1,1,""]},"thoth.adviser.python.pipeline_configuration.PipelineConfig":{steps:[7,2,1,""],strides:[7,2,1,""]},"thoth.adviser.python.pipeline_configuration.PipelineConfigAdviser":{by_recommendation_type:[7,5,1,""]},"thoth.adviser.python.pipeline_configuration.PipelineConfigDependencyMonkey":{by_decision_type:[7,5,1,""]},"thoth.adviser.python.solver":{GraphReleasesFetcher:[7,1,1,""],PackageVersionDependencyParser:[7,1,1,""],PythonGraphSolver:[7,1,1,""],PythonPackageGraphSolver:[7,1,1,""]},"thoth.adviser.python.solver.GraphReleasesFetcher":{fetch_releases:[7,4,1,""],graph_db:[7,2,1,""]},"thoth.adviser.python.solver.PackageVersionDependencyParser":{parse:[7,4,1,""]},"thoth.adviser.python.solver.PythonPackageGraphSolver":{solve:[7,4,1,""]},thoth:{adviser:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","classmethod","Python class method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:exception","4":"py:method","5":"py:classmethod","6":"py:function"},terms:{"abstract":4,"case":[0,2,3,7,8],"class":[4,6,7,8,9,10,11,12],"default":3,"enum":[2,7],"final":9,"float":[7,9,12],"function":[2,3,6,9,10],"import":6,"int":[7,9],"new":3,"public":5,"return":[3,4,7,9],"true":7,"try":7,For:[2,3],HAS:9,NOT:5,One:[3,9],TLS:5,That:5,The:[0,1,2,3,4,5,11],There:[0,1,2,5,7],These:[1,2,3,4,9,12],With:3,_extendedenum:6,_stepchangecontext:9,abi:3,about:[0,1,4],abov:[2,3],accept:[1,6,11],accord:10,account:[9,10],accumul:9,accur:2,accuraci:1,across:1,actual:[1,2,3,5,7,9],adapt:[3,6,7,8],add:9,add_path:9,add_resolved_direct_depend:9,addit:[3,4,10],adjust:9,adjust_scor:9,advantag:[0,3],advis:[0,1,3,4],affect:[11,12],after:[1,9,10],again:2,against:[0,2,5,11],aggreg:[1,2,7],aico:5,aim:[1,4],algorithm:[1,3],alia:7,all:[1,2,3,4,6,7,9],all_vers:7,alloc:1,allow:[2,10],along:1,also:[0,2,3,5],alwai:[0,10],amun:[0,1,2,3,7],ani:[0,1,3,5,10,11],anoth:[3,5],anymor:5,api:[1,2,3,4,5,6,7],app:3,applic:[0,2,4,5,7],apt:1,argument:2,ari:[0,2,3],around:7,arrai:3,ask:3,aspect:1,assembl:2,assign:[1,3],associate_dependency_map:9,associate_dependent_map:9,attribut:4,autom:1,automat:[1,2],avail:[1,2,3,4,5,7,10],awai:4,back:[0,3,4,6,7],bad:4,base:[0,1,2,3,4,5,6,7,8,9,10,11,12],basic:3,becaus:4,befor:[4,9,10],behavior:0,being:[4,10,11],bellow:5,below:2,benefit:3,besid:[0,1],best:[0,2],better:0,between:[0,3,12],bin:[3,6,7],binari:0,bind:3,bool:[7,9],both:5,bound:[3,8],bug:6,build:[1,2,3,5],buildtim:10,buildtime_error:[6,7,9],buildtimeerrorfilt:10,built:[2,5],by_decision_typ:7,by_recommendation_typ:7,cach:[3,6],call:[0,1,2,3,4,6,7,9],callabl:9,can:[0,1,2,3,4,5,8,12],candid:[2,4,9],cannot:[2,4,7,9],cannotremovepackag:9,capabl:[0,1],captur:3,care:0,carri:[4,9],casu:5,categori:3,cento:2,centos7:2,ceph:1,certain:1,chain:[3,9],chang:[2,5,9],characterist:1,check:[3,9,10,11],choic:0,chosen:3,clash:7,classmethod:7,cli:[0,1,2],client:6,close:8,cmp_function:9,code:[1,2,3,6,12],column:10,com:2,combin:[1,2],come:[4,5],comma:[2,5],command:2,common:[7,12],commun:[3,6],comparis:5,comparison:1,compat:[1,3],comput:[0,1,2,5,6,7,8,9],compute_on_project:7,computed_stacks_heap:7,conduct:9,config:7,configur:[0,5,7],conifgur:2,connect:5,consid:[1,7,10],consist:4,constraint:[6,7],constraintclasherror:7,construct:[0,3],constructor:4,consum:[1,3],consumpt:3,contain:[1,2,3],container:3,content:2,context:[1,4,7,9,10],context_bas:[6,7],contextbas:9,control:[0,2],copi:3,core:[1,2,4,7],correctli:2,correspond:2,could:[1,8],count:[7,9,10],cpu:1,creat:[1,2,3],creation:[3,9],ctype:3,current:[1,3,5,9],current_nam:9,cut:10,cutprereleas:10,cuttoolchain:10,cutunreach:10,cve:[6,7,9],cve_pen:[10,11],cvepen:10,cvescor:11,cxxabi_1:3,cycl:[0,3],cyclic:3,danger:5,data:[1,2,7],databas:[0,1,2,4,7,9,12],decid:4,decis:[6,7],decision_typ:7,decisiontyp:[6,7],dedic:1,defin:7,definit:7,demand:0,depend:[3,4,5,6,7,8,9,10],dependency_graph:[6,7],dependency_monkei:6,dependency_typ:3,dependencygraph:8,dependencygraphexcept:8,dependencypars:7,dependneci:2,deploi:[2,3,5],deriv:1,describ:[2,3],deseri:[0,3],design:2,desir:10,determin:0,develop:[2,4],dgraph:[2,3,7,9,10,11,12],dict:[6,7,9,10,11,12],dictionari:9,did:[5,6,11],differ:[1,3,11],differenti:11,digest:7,digests_fetch:6,digestsfetcherbas:7,direct:[2,3,4,7,8,9,10],direct_depend:[8,9],direct_dependencies_map:9,direct_dependencies_scor:9,directdependencyremov:7,directli:[1,2,5,6],directori:[3,7],disabl:2,discard:[9,10],discuss:1,disk:0,distinguish:3,distribut:[1,2],dm_amun_inspect_wrapp:7,dnf:1,doabl:2,docker:2,dockerfil:3,document:[2,5],doe:[0,1,3,5,9,10,11],done:[0,1,3,5,7],down:[1,3,9,10],download:5,downsid:3,dry_run:7,due:[3,6,8,9],duplic:11,durat:9,dure:[0,3,9],dynam:[0,3,7],each:[0,2,3,4,7,9,10],easi:3,easili:2,ecosystem:[0,1,3,6],effici:3,eigher:5,encount:[3,10,11],end:[3,5,8,9],endpoint:1,engin:[1,2,6,7],entrypoint:9,environ:[0,1,2,4,5],error:[1,10,11],estim:8,evalu:1,even:[1,6],everi:[4,9],exactli:5,exampl:[2,3,8],except:[0,2],execut:[1,2,3,4,9],exist:0,expand:3,expect:5,experi:2,explicitli:[5,10],explictli:5,expos:[1,3,5,6],fact:[0,3,4],fail:[5,9],fallback:5,fals:[7,9],far:8,fast:3,faster:1,fed:2,fedora:[1,2],feed:[1,2],feel:2,fetch:7,fetch_digest:7,fetch_releas:7,fetcher:7,fiction:1,field:7,file:[0,3],filter:[4,7,9,10,11],final_sort:9,find:[2,3,4],first:[1,3,4,5,10,11],focus:3,follow:[2,3,4,5],form:1,found:[3,5,6],free:2,from:[1,2,3,4,5,6,7,9,10,12],full:[2,3],fulli:[1,3,4],fundament:3,gather:[1,6],gener:[0,1,2,3,6,7,8,9,10,11],generate_pipeline_product:9,generated_project:7,get:[2,3,6,7,9,10,12],get_cve_record:12,get_dur:9,get_package_version_tupl:9,get_perform:12,get_performance_impact_packag:12,get_python_package_performance_impact_al:6,get_python_project_performance_import:6,get_stack_info:9,git:2,github:2,given:[1,2,3,4,5,6,7,9,10,11,12],goal:[1,2],goe:3,grace:[7,9],graph:[1,2,4,7,8,9,10,11,12],graph_db:7,graphdatabas:[7,9,10,11,12],graphdigestsfetch:7,graphreleasesfetch:7,group:[3,10,12],guarante:[1,2,5],guid:2,hand:5,handl:3,happen:[5,8],hardwar:[1,2,4,5],has:[0,2,3,4,5,10,11],hash:0,hat:5,have:[3,4,5,8,10,11],help:[0,2],here:3,heurist:11,hierarchi:[8,9],high:1,highest:0,hint:5,hit:3,hold:2,horizont:10,host:3,how:[2,3,4,5],howev:[1,2,5],http:2,idea:3,identifi:[3,6],idx:9,illustr:1,imag:[1,2,3],imagin:0,immedi:3,impact:[4,6,10],implement:[0,4,5,7,8,9,10,11],includ:[4,9],incompat:4,index:[0,1,2,3,4,5,9,10],indexes_us:9,indic:1,indirect:9,info:[0,2,7],inform:[1,3,4,5],infrastur:2,init:1,initi:4,input:[1,2,4,5],input_project:9,insecur:5,insid:9,inspect:[1,3,7],instal:[0,1,3,5,7],instanc:[0,2,5,7,9],instanti:9,instead:[5,6],intens:2,inter:3,interact:[1,2],interfac:[2,7,8],intern:[0,3,9],internalerror:6,introduc:3,introduct:4,invalid:[6,7,9],ipc:3,is_toolchain:10,isi:2,isis_api_url:6,issu:[2,3],item:3,iter:[6,9,12],iter_all_depend:9,iter_all_dependencies_tupl:9,iter_direct_depend:9,iter_direct_dependencies_tupl:9,iter_paths_with_scor:9,iter_transitive_depend:9,iter_transitive_dependencies_tupl:9,its:[2,3,9],itself:0,janusgraph:2,janusgraph_service_host:2,job:1,json:[1,5],just:[5,7],justif:[3,9],kafka:5,kei:3,kept:9,kill:[3,8],know:10,knowledg:[1,2],known:6,languag:0,larg:2,last:3,later:3,latest:[2,6,7,10,11],latet:0,latter:11,lazili:7,leaf:3,learn:2,least:5,let:[1,3,5],level:[2,6],lib64:3,libdependency_graph:[3,4,8],libdependencygraph:8,librari:[1,2],libstdc:3,like:[0,3,4,8],limit:[2,7,9,10],limit_latest_vers:[6,7,9],limitlatestvers:10,line:[1,2,7],list:[1,2,3,4,5,6,7,8,9,12],load:[0,3],lock:[0,4,5,6,7,10],lockfil:7,log:9,log_report:9,longer:5,look:4,made:[1,4],mai:2,main:[1,2,3,4],make:[1,2,3,4,9,10],makefil:3,manag:[1,5],manipul:[7,9],manner:3,map:[3,6,9],match:5,math:1,mean:[5,11],meant:12,measur:9,mechan:[0,1,3],medata:3,memori:[0,1,2,3],metadata:[3,5],method:7,might:[4,5],million:1,mirror:5,modifi:9,modul:2,monkei:[0,4,6,7],more:[2,3,5,7,10],moreov:3,most:2,much:[1,3],multipl:[1,3],name:[3,4,6,7,9,10,11],namespac:1,nativ:[1,2],need:[2,3,6,7],neg:11,never:10,newer:11,next:[3,9],ninja:2,node:[0,3,10],nodependencieserror:8,none:[6,7,8,9,10,11],nor:2,note:[1,3,5],notebook:2,notfound:6,noth:[7,9,10,11],now:[2,3,6],number:[3,6,7,8,10],numpi:3,object:[1,6,7,8,9],observ:[0,1,3,6,12],obtain:3,occur:3,off:[1,7,10],offlin:[0,7],often:2,old:10,older:11,omit:3,onc:[1,9],one:[0,1,3,4,5],ones:11,onli:[1,2,10,11],onto:[0,1],oom:[3,8],openapi:1,openshift:[1,2,3,5],oper:[0,1,2,3,4],opt:3,optim:[5,6],option:[1,4,5,7],order:[4,9,11],oserror:3,other:5,otherwis:3,our:3,out:[1,3,4,7,10,11],output:[1,4,5,7],outsid:9,over:[2,5,9],overal:11,own:[3,5],packag:[0,1,3,4],package_nam:7,package_tupl:[6,9,12],package_vers:[7,9,10],packagevers:[7,9,10],packageversiondependencypars:7,page:2,pair:3,pakag:0,paragraph:3,parallel:3,param:7,paramet:[2,3,9,10,11],parameters_default:[9,10,11],parameters_dict:9,parameters_schema:9,pars:[1,7],parser_kwarg:7,part:1,partial:3,pass:[1,2,9],past:3,path:[3,4,8,9,10],pattern:3,penal:[10,11],pep:[2,5],per:[2,5],perfom:5,perform:[0,1,2,3,4,5,6,7,9,10,11],performance_adjust:[6,7,9],performance_scor:[6,7,9],performance_threshold:[10,11],performanceadjust:10,performancescor:11,pickl:0,pin:[1,3,9],pip3:2,pip:[1,2,3],pipe:3,pipelin:[2,6,7],pipeline_configur:6,pipelineconfig:7,pipelineconfigadvis:7,pipelineconfigdependencymonkei:7,pipelineexceptionbas:9,pipelineproduct:9,pipelineunitbas:[4,9],pipenv:[1,2,5,6],pipfil:[0,1,5,6],pipfileparseerror:6,place:1,playbook:2,point:[1,2,5],pool:1,posit:[3,4],possibl:[0,1,2,9,11],pre:[1,10],precomput:7,predict:2,prematur:8,prematurestreamenderror:8,prepar:4,prereleas:[6,7,9],prerequisit:10,present:[1,3,5,9,10,11],preserv:[10,11],previou:3,previous:0,primari:2,primarili:3,primit:7,priorit:4,procedur:1,process:3,produc:[1,3,8],product:[5,6,7],program:0,project2vec:6,project:[0,1,2,4,6,7,9,10,11,12],propag:9,provid:[1,2,3,4,8,9,10,11],pure:7,purpos:[2,12],pypi:[0,5,6],python:[0,1,2,3,4,5,6],pythongraphsolv:7,pythonpackagegraphsolv:[7,9],pythonpath:2,pythonrecommendationoutput:6,qualiti:1,queri:4,rais:[6,7,8,9],random:[4,6,7],random_decis:[6,7,9],randomdecis:11,randomli:11,rather:[3,5],raw:[3,9],raw_path:9,reach:3,read:3,real:1,reason:[2,3],recommend:[0,1,3,5,6,7],recommendation_typ:7,recommendationtyp:[6,7],red:5,reduc:[6,10],refer:3,rel:4,relat:[0,1,7],releas:[7,10],releasesfetch:7,relev:[0,1,3],remov:[4,5,7,9,10],remove_package_tupl:9,repo:[1,2],report:[1,3,7,8,9],repositori:[2,3],repres:[2,3,9],represent:[7,9],request:[1,2],requir:[0,1,3,6,7],reserv:1,reset:9,reset_stat:9,resolut:[0,1,2,3,4,5,7,9],resolv:[0,1,2,4,7,9,10,11],resourc:[1,6],resovl:2,respect:[2,4,5,6,9,11],restrict:2,restrict_index:[6,7,9],restrictindex:10,result:[0,1,3,4,6],retriev:[3,9,12],reus:[1,2],reusabl:3,revers:9,root:3,routin:4,rpm:[1,2],run:[1,4,5,7,9,10,11],runtim:[1,2,4,10,11],runtime_environ:7,runtime_error:[6,7,9],runtimeenviron:7,runtimeerrorfilt:10,s2i:[2,5],sai:5,same:[2,3,5,10,11],sampl:[0,2,4],scan:5,schedul:2,schema:9,score:[0,2,3,4,7,9,10,11,12],score_filt:[6,7,9],score_package_tupl:9,score_path_index:9,scorefilt:11,script:1,search:2,second:[3,9],section:[3,4],see:[0,1,2,3,4,5,7],seed:[2,7],semver:[6,10,11],semver_sort:[6,7,9],semversort:10,sent:[1,7],separ:[2,3,5],serial:[3,4],serv:12,server:3,servic:[0,1,2,3,6],set:[0,2,4,7,9,12],setup:2,share:12,ship:3,should:[0,1,3,4,5,7,9,10],show:2,shown:3,side:3,similar:12,simpl:[2,4,5,6],simpli:2,size:3,softwar:[0,1,2,3,4,7,8,10],solali:2,solv:7,solver:[0,4,6,9],solver_kwarg:7,some:[0,2,4,10,12],sort:[9,10],sort_direct_depend:9,sort_path:9,sourc:[0,1,3,4,6,7,8,9,10,11,12],span:1,specif:[0,1,2,3,4,5],specifi:[5,7],speed:0,spent:3,spot:2,src:3,ssl:5,stabl:[6,7],stack:[0,1,2,3,5,6,7,8,9,10,11],stack_candid:[6,7],stack_info:9,stackcandid:9,stacks_estim:8,standalon:3,standard:[1,2],start:[3,9],start_tim:9,stat:9,state:[0,2,3,4,5,9],station:2,statist:9,stats_bas:[6,7],statsbas:9,statu:1,stdout:7,step:[1,6,7,12],step_context:[6,7,10],step_stat:[6,7],stepcontext:[4,9,10],stepstat:9,stl:3,storag:[7,9,10,11,12],store:[2,7],str:[6,7,8,9,10,11,12],stream:[1,4,8],stream_delimit:8,stream_stop:8,stride:[6,7,12],stride_context:[6,7,11],stride_stat:[6,7],stridecontext:[4,9,11],strideremovestack:9,stridestat:9,structur:[0,1,3,5],subcommand:1,submit:[1,3],submodul:2,subpackag:2,subsequ:[1,2,3,11],substitut:3,suffix:2,sugar:7,suggest:5,suit:2,suppli:[0,1,4],support:[1,5],suppos:3,sure:[3,4,9,10],swagger:[1,6],syntax:7,system:[0,1],take:9,taken:[2,10],talk:[3,8],target:[1,3],tensorflow:5,terminolog:2,test:[1,2,6],thamo:2,than:3,thei:[3,4,10],them:[0,3,5,10],therei:7,thi:[0,1,2,3,4,5,6,7,8,9,10,11],those:1,thoth:[0,1,3,4],thoth_adviser_filedump:0,thoth_adviser_no_digest:0,thoth_adviser_subcommand:2,thoth_adviser_warehous:5,thoth_whitelisted_sourc:2,thothadviserexcept:[6,7],thousand:1,threshold:12,through:2,thu:0,tightli:3,till:9,time:[1,2,3,5,9],timer:9,to_dict:9,togeth:[2,4],tool:[1,2],toolchain:[6,7,9],top:[3,9],traffic:5,transit:[2,3,4,9],transitive_dependencies_map:9,transpar:[6,9],travers:[3,4,7,8,10],treat:5,tree:0,tri:5,trigger:1,triplett:3,trust:2,tupl:[4,6,7,8,9,12],turn:[3,9],two:[0,1,3,4,5],type:[3,4,6,7,9],unablelock:7,underli:3,undesir:7,uniqu:3,unit:[4,6,7,9],unit_bas:[6,7],unit_start_tim:9,units_run:9,unreach:[6,7,9],unsupport:6,unsupportedconfigur:6,until:3,untrust:2,update_paramet:9,upper:8,upstream:0,upto:7,url:[1,2,3,4],use:[0,2,3,5,6],used:[0,1,2,3,4,5,6,7,9,10,11,12],useful:2,user:[1,2,3,5,8,9,10],uses:[0,3,6],using:[0,1,2,3,7],util:[1,2],valid:[0,1,2,3],valu:3,variabl:[0,2,5],vector:4,veri:[1,2,3,11],verif:[1,5],verifi:[1,2],version:[0,2,3,4,6,7,9,10,11],versionidentifiererror:6,via:[2,3],visit:7,wai:[2,10,11,12],walk:[8,9],want:[1,10],warehous:[0,5],well:[2,3,5],were:[1,2,3,8],what:[0,1,2,8],when:[2,3,5,7,10],where:[1,3,4,7],whether:4,which:[0,1,2,3,4,5,8,9,10,11,12],whitelist:[2,5],whole:[0,3],why:2,within:[6,9],without:[1,5],work:[0,10],world:1,would:[0,3,8],wrap:9,wrapper:[7,9],write:[3,7],written:[3,7],yield:3,you:[0,2,3,5],your:[0,2,3,5],yum:1},titles:["Dependency Graph","Dependency Monkey Design Document","Thoth Adviser","Resolver design document","Stack generation pipeline","Provenance Checks","thoth.adviser package","thoth.adviser.python package","thoth.adviser.python.bin package","thoth.adviser.python.pipeline package","thoth.adviser.python.pipeline.steps package","thoth.adviser.python.pipeline.strides package","thoth.adviser.python.pipeline.units package"],titleterms:{"case":1,"enum":6,Use:1,about:2,advis:[2,6,7,8,9,10,11,12],architectur:[1,4],artifact:5,bin:8,buildtime_error:10,check:[2,5],cli:6,configur:[2,6],content:[6,7,8,9,10,11,12],context_bas:9,crossroad:2,cve:[10,11,12],databas:3,depend:[0,1,2],dependency_graph:8,dependency_monkei:7,deploy:2,design:[1,3],develop:0,differ:5,digests_fetch:7,document:[1,3],error:5,exampl:[1,5],except:[6,7,8,9],gener:4,graph:[0,3],hash:5,implement:[2,3],info:5,inform:2,instal:2,invalid:5,isi:6,issu:5,librari:3,limit_latest_vers:10,local:2,miss:5,modul:[6,7,8,9,10,11,12],monkei:[1,2],overview:1,packag:[2,5,6,7,8,9,10,11,12],perform:12,performance_adjust:10,performance_scor:11,pipelin:[4,9,10,11,12],pipeline_configur:7,possibl:5,prereleas:10,product:9,proven:[2,5],python:[7,8,9,10,11,12],queri:3,random_decis:11,recommend:2,report:5,resolv:3,restrict_index:10,run:2,runtime_error:10,score_filt:11,semver_sort:10,solver:7,sourc:[2,5],stack:4,stack_candid:9,stats_bas:9,step:[4,9,10],step_context:9,step_stat:9,stride:[4,9,11],stride_context:9,stride_stat:9,submodul:[6,7,8,9,10,11,12],subpackag:[6,7,9],thoth:[2,6,7,8,9,10,11,12],toolchain:10,unit:12,unit_bas:9,unreach:10,use:1,warn:5}})