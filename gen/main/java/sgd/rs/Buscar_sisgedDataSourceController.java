package sgd.rs;

import com.emc.xcp.services.datasource.domain.Query;
import com.emc.xcp.services.datasource.search.rs.SearchController;
import javax.inject.Inject;
import javax.inject.Named;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import sgd.domain.Buscar_sisgedDataSourceOutput;


@Controller(value = "sgd.rs.Buscar_sisgedDataSourceController")
@RequestMapping(value = "/application/sgd_expediente_sisgeds", params = "type=sgd_buscar_sisged")
public class Buscar_sisgedDataSourceController extends SearchController<Buscar_sisgedDataSourceOutput> {
    public Buscar_sisgedDataSourceController() {
        super(Buscar_sisgedDataSourceOutput.class);
    }

    public Query getQuery(){
        return query;
    }


    @Inject
    @Named(value = "sgd_buscar_sisged")
    private Query query;


}